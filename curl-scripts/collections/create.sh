
curl --include --request POST "http://localhost:4741/collections" \
  --header "Content-type: application/json" \
  --data '{
    "collection": {
        "name": "'"${NAME}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo
