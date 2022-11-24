export const downloadFile = async (url: string, name: string) => {
  const data = await fetch(url),
        resp = await data.blob(),
        tempUrl = URL.createObjectURL(resp),
        aTag = Object.assign(document.createElement("a"), {
        href: tempUrl,
        download: name,
        });
  console.log()
  document.body.appendChild(aTag);
  aTag.click();
  URL.revokeObjectURL(url);
  aTag.remove();
};
