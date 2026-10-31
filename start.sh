#!/usr/bin/env bash
# start.sh — build the Mafia World static app into dist/ and serve it in the foreground on PORT (default 3000).
#
# Source lives in mafia-world/; the built static output lives in dist/ (both inside PROJECT_DIR).
# Writes deployment-output.json to OPENCODE_WEB_DIR (worker metadata). Capture evidence goes under RUNNER_TEMP.
set -euo pipefail

cd "$(dirname "$0")"
PROJECT_DIR="$(pwd)"
DIST_DIR="$PROJECT_DIR/dist"
PORT="${PORT:-3000}"
export PORT

WEB_DIR="${OPENCODE_WEB_DIR:?OPENCODE_WEB_DIR must be set}"
: "${RUNTIME_DIR:?RUNTIME_DIR must be set}"

echo "[start] PROJECT_DIR=$PROJECT_DIR"
echo "[start] DIST_DIR=$DIST_DIR PORT=$PORT WEB_DIR=$WEB_DIR"

# --- Build: this HTML/CSS/JS app has no external dependencies; copy static source into built output ---
/usr/bin/time -p mkdir -p "$DIST_DIR"
/usr/bin/time -p cp -r mafia-world/. "$DIST_DIR/"

# --- Worker metadata: absolute built static directory inside PROJECT_DIR ---
/usr/bin/time -p printf '%s\n' "{\"project\":\"$PROJECT_DIR\",\"directory\":\"$DIST_DIR\"}" > "$WEB_DIR/deployment-output.json"
echo "[start] wrote $WEB_DIR/deployment-output.json"

# --- Serve built output in the foreground on PORT ---
echo "[start] serving $DIST_DIR on http://127.0.0.1:$PORT"
exec /usr/bin/time -p python3 -m http.server "$PORT" --directory "$DIST_DIR" --bind 127.0.0.1
