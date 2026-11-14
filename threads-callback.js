(() => {
  "use strict";
  const incoming = new URLSearchParams(window.location.search);
  const state = incoming.get("state");
  const code = incoming.get("code");
  const error = incoming.get("error");
  if (!state || (!code && !error)) return;
  const target = new URL("http://127.0.0.1:8788/threads/callback");
  target.searchParams.set("state", state);
  if (code) target.searchParams.set("code", code);
  if (error) target.searchParams.set("error", error);
  window.history.replaceState(null, "", window.location.pathname);
  window.location.replace(target.href);
})();
