if [ "$#" -ne 1 ]
  then
    echo "Usage: number digit"
    exit 1
fi

case "$1"
in
  0) echo zero;;
  1) echo one;;
  2) echo two;;
  3 | 4) echo three or four;;
  *) echo "Default argument; please specify a single digit";;
esac

