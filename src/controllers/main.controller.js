const path = require("path");
const path__home = path.resolve(__dirname, "./index.ejs");

const mainControllers = {
  // home: (req, res) => res.send('Ruta para la vista Home'),
  home: (req, res) => {
      res.render(path.resolve(__dirname, '../views/index.ejs'), {title: "HOME"});
    // res.render("index", {
    //     title: "HOME"
    // });
  },
  contact: (req, res) => {    
    res.render(path.resolve(__dirname, '../views/misc/contact.ejs'));
    // res.render("misc/contact", {
    //     title: "HOME"
    // });
  },
  about: (req, res) => {
    res.render(path.resolve(__dirname, '../views/misc/about.ejs'));
    // res.render("misc/about", {
    //     title: "HOME"
    // });
  },
  faqs: (req, res) => {
    res.render(path.resolve(__dirname, '../views/misc/faqs.ejs'));
    // res.render("misc/faqs", {
    //     title: "HOME"
    // });
  },
//   contact: (req, res) => res.send("Ruta para la vista Contact"),
//   about: (req, res) => res.send("Ruta para la vista About"),
//   faqs: (req, res) => res.send("Ruta para la vista FAQs"),
};

module.exports = mainControllers;
