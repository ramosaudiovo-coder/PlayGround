#!/usr/bin/env bash
# capture.sh — open CAPTURE_URL in a browser, wait for rendered content, and capture
# desktop (1440x900) and mobile (390x844) views as final-desktop.png / final-mobile.png in CAPTURE_DIR.
#
# Exit 75 for temporary navigation/browser infrastructure failures; exit 1 for script or rendering defects.
# Capture output is written to CAPTURE_DIR (outside the project source). The app is left running.
set -euo pipefail

: "${CAPTURE_URL:?CAPTURE_URL is required}"
: "${CAPTURE_DIR:?CAPTURE_DIR is required}"

RUNTIME_DIR="${RUNTIME_DIR:-/home/runner/work/_temp/omgithub-runtime}"

echo "[capture] CAPTURE_URL=$CAPTURE_URL"
echo "[capture] CAPTURE_DIR=$CAPTURE_DIR"
echo "[capture] RUNTIME_DIR=$RUNTIME_DIR"

/usr/bin/time -p mkdir -p "$CAPTURE_DIR"
# default-capture.mjs launches Chromium, waits for load + visible body + loaded fonts,
# screenshots desktop + mobile, closes its own browser, and uses exit codes 75/1.
/usr/bin/time -p node "${RUNTIME_DIR:?}/scripts/default-capture.mjs"
