import gh from 'github-url-to-object';
import downloadTarball from 'download-package-tarball';

module.exports = ({arg, dir}) => {
  const parsed = gh(arg);

  if (!parsed) {
    throw new Error('arg is not a valid github reference');
  }

  return downloadTarball({
    url: parsed.tarball_url,
    dir
  });
};
