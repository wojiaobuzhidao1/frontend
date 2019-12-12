let util = {

};
util.title = function (title) {
    title = title ? title + '- Science Searching': 'Science Searching';
    window.document.title = title;
};

export default util;