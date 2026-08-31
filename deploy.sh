#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

REMOTE="root@frmnjn.my.id"
DEPLOY_DIR="~/nginx/html/games"

echo "==> git status"
git status --short

echo "==> push ke GitHub"
git push origin main

echo "==> pull di server"
ssh "$REMOTE" "cd $DEPLOY_DIR && git pull"

echo "==> verifikasi HTTP"
curl -s -o /dev/null -w "index:   %{http_code}\n" https://frmnjn.my.id/games/
curl -s -o /dev/null -w "shape:   %{http_code}\n" https://frmnjn.my.id/games/shape-sorter/
curl -s -o /dev/null -w "ant:     %{http_code}\n" https://frmnjn.my.id/games/ant-smasher/
curl -s -o /dev/null -w "animal:  %{http_code}\n" https://frmnjn.my.id/games/animal-garden/
curl -s -o /dev/null -w "color:   %{http_code}\n" https://frmnjn.my.id/games/color-garden/

echo "==> done"
