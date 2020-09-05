export const socialMediaLinks = {
    "youtube" : "https://www.youtube.com/channel/UCO77KLKwplncMHLo6gLpIHw",
    "discord" : "https://discord.gg/2xbR5qT",
    "twitter" : "https://twitter.com/Flopperam"
};

export const importAll = (r) =>  {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
};