export const formatChurchName = (churchName) => {
    return churchName.replace(/(COTA-)(.+)/, (match, prefix, namePart) => 
        prefix + namePart.replace(/-/g, " ")
    );
};