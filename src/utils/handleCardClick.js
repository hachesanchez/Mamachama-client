export const openSocialMediaUrl = (url) => {
    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
};

export const handleCardClick = (user) => {
    if (user.socialMedia && user.socialMedia.length > 0) {
        const order = ['LinkedIn', 'Instagram', 'YouTube', 'Facebook'];
        for (let platform of order) {
            const socialMedia = user.socialMedia.find(social => social.platform === platform);
            if (socialMedia) {
                openSocialMediaUrl(socialMedia.url);
                break;
            }
        }
    }
};