#!/bin/sh

dist_js_dir="$1"; shift
base_dir="${dist_js_dir%html\/*}"
if [ ! -z ${base_dir##*/html} ]; then
  base_dir="${base_dir}html";
fi
end_path="${dist_js_dir#*html\/}"
if [ "$end_path" = "$dist_js_dir" ]; then end_path=""; fi
PUBLIC_PATH=${PUBLIC_PATH:-${VUE_APP_PUBLIC_PATH:-$REACT_APP_PUBLIC_PATH}}

if [[ "$dist_js_dir" != "$(echo "$base_dir/$end_path" | sed 's/\/$//g')" ]]; then
      echo "Error, more than one 'html' dir on path";
  fi

  echo "'\$dist_js_dir' $dist_js_dir"
  js_file_prefix="$1"; shift
  echo "'\$js_file_prefix' $js_file_prefix"
  SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

  vars=$(cat $SCRIPTPATH/jvjr-env.json | sed "s/{//g; s/}//g; s/'//g; s/,//g; s/\"//g; s/\\$//g" | sed -rn '/\S/p' | cut -d':' -f2 | sed -e 's/^[[:space:]]*//; s/[[:space:]]*$//');
  printf "VARIABLES: \n$vars\n";

getDefaultPath(){
  indexFile=$(cat $base_dir/index.html)        # sed -n -E "/(src=\/.*\/*$js_file_prefix*)/p" | cut -d'>' -f1)
  DEFAULT_PATH=$(echo $indexFile | tr " " "\n" | sed -n -E "/(src=\"?\/.*\/*$js_file_prefix*)/p" | cut -d'>' -f1)
  if test "${DEFAULT_PATH#*\"}" != "${DEFAULT_PATH}"; then
    DEFAULT_PATH=$(echo $DEFAULT_PATH | sed 's/"//g');
    QUOTE="yes";
  fi

  DEFAULT_PATH="$(dirname ${DEFAULT_PATH#src=})"
  DEFAULT_PATH="${DEFAULT_PATH%$end_path}"
  echo "$DEFAULT_PATH"
}

modifyPublicPath() {
  if [[ -z "$PUBLIC_PATH" ]]; then
    PUBLIC_PATH=$DEFAULT_PATH
    echo "Public path vacio, Se usa el por defecto $PUBLIC_PATH"
  else
    if [[ "${PUBLIC_PATH: -1}" != '/' ]]; then
      PUBLIC_PATH="${PUBLIC_PATH}/"
    fi
    if [[ "${PUBLIC_PATH::1}" != '/' ]]; then
      PUBLIC_PATH="/${PUBLIC_PATH}"
    fi
  fi
  echo "El path es $PUBLIC_PATH"
  if [[ "$PUBLIC_PATH" != "$DEFAULT_PATH" ]]; then
    #echo "Public path != default, $PUBLIC_PATH != $DEFAULT_PATH"
    if [[ "$QUOTE" == "yes" ]]; then
      sed -i -e "s|href=\"$DEFAULT_PATH|href=\"$PUBLIC_PATH|g" -e "s|src=\"$DEFAULT_PATH|src=\"$PUBLIC_PATH|g" $base_dir/index.html
    else
      sed -i -e "s|href=$DEFAULT_PATH|href=$PUBLIC_PATH|g" -e "s|src=$DEFAULT_PATH|src=$PUBLIC_PATH|g" $base_dir/index.html
    fi
  fi

  if [[ "$PUBLIC_PATH" != '/' ]] && [[ "${PUBLIC_PATH::1}" == '/' ]]; then
    echo "Temporal dir created"
    mkdir -p "/tmp/jvjr$PUBLIC_PATH"
    mv "$base_dir"/* "/tmp/jvjr$PUBLIC_PATH"
    mv "/tmp/jvjr$PUBLIC_PATH" "$base_dir"

    dist_js_dir="$base_dir${PUBLIC_PATH}${end_path}"
  fi
}

getDefaultPath;
modifyPublicPath;

for file in $dist_js_dir/$js_file_prefix.*.js;
do
  if [ ! -f $file.tmpl.js ]; then
    cp $file $file.tmpl.js
  fi
  printf %s "$vars" | while IFS= read -r line || [ -n "$line" ]; do
    eval content=\$$line;
    echo "CONTENT: $line : $content";
    if [ ! "$content" = '' ];
    then
      envsubst '$'"$line" < $file.tmpl.js > $file;
      cp $file $file.tmpl.js;
    fi
  done
  if [ -f $file.tmpl.js ]; then
    rm $file.tmpl.js
  fi
done

echo "Starting"
exec "$@"

