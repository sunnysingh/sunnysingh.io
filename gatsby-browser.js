exports.onServiceWorkerUpdateFound = () => {
  const shouldReload = window.confirm(
    'Site update available. Reload for latest version?'
  );

  if (shouldReload === true) window.location.reload();
};
