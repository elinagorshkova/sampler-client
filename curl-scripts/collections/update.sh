curl --include --request PATCH "http://localhost:4741/collections/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "collection": {
      "name": "'"${NAME}"'",
      "author": "'"${AUTHOR}"'",
      "sound_1": "'"${ONE}"'"
    }
  }'

echo
