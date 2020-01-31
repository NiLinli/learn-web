#
# roledex program to ad cat lu remove
#

validchoice=""

until [ -n "$validchoice" ]
do
    echo '
      Would you like to:
        1. Look someone up
        2. Add someone to the phone book
        3. Remove someone from the phone book
        Please select one of the above (1-3): \c'

    read choice
    echo ""

    case "$choice"
    in
      1)  echo "Enter name to look up: \c"
          read name
          sh lu.sh "$name"
          validchoice=TRUE;;
      2)  echo "Enter name to be added: \c"
          read name
          echo "Enter number: \c"
          read number
          sh add.sh "$name" "$number"
          validchoice=TRUE;;
      3)  echo "Enter name to be removed: \c"
          read name
          sh remove.sh "$name"
          validchoice=TRUE;;
      *)  echo "Bad choice";;
    esac

done



