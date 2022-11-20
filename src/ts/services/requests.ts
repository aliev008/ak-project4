const postData = async (url, data): Promise<string> => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    if (res.status === 200) {
      return await res.text();
    } else {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const getData = async (url): Promise<any> => {
  const res = await fetch(url);

  if (!res) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export { postData, getData };
