#!/bin/bash
# curl -s -o /dev/null -w "Response Status for https://api.netlify.com/api/v1/deploys/$DEPLOY_ID/cancel : %{http_code}" -H "Authorization: Bearer $NETLIFY_CANCEL_TOKEN" -d {}  https://api.netlify.com/api/v1/deploys/$DEPLOY_ID/cancel
exit 0
