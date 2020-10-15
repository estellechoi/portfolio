const width = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    tabletL: '1024px',
    laptop: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${width.mobileS})`,
    mobileM: `(min-width: ${width.mobileM})`,
    mobileL: `(min-width: ${width.mobileL})`,
    tablet: `(min-width: ${width.tablet})`,
    tabletL: `(min-width: ${width.tabletL})`,
    laptop: `(min-width: ${width.laptop})`,
    desktop: `(min-width: ${width.desktop})`,
    desktopL: `(min-width: ${width.desktop})`
};
