const nodemailer = require("nodemailer");
const credentials = require("../credentials.json");
const { validationResult, checkSchema } = require("express-validator");
module.exports = {
  contactUsValidator: {
    name: {
      in: ["body"],
      isString: true,
      errorMessage: "Please enter your name",
      notEmpty: {
        options: { nullable: false, checkFalsy: false },
      },
      matches: {
        errorMessage: "Name must be at least 2 characters long",
        options: ["^[a-zA-Z ]*$"],
      },
    },
    phone: {
      in: ["body"],
      isMobilePhone: true,
      errorMessage: "Please enter a valid phone number",
    },
    email: {
      in: ["body"],
      isEmail: true,
      errorMessage: "Please enter a valid email address",
    },
    subject: {
      in: ["body"],
      notEmpty: {
        options: { nullable: false, checkFalsy: false },
      },
      matches: {
        errorMessage: "Please enter a valid subject",
        options: ["[^(?:\n\n|\r\n\r\n)]*"],
      },
      errorMessage: "Please enter a subject",
    },
    message: {
      in: ["body"],
      notEmpty: {
        options: { nullable: false, checkFalsy: false },
      },
      matches: {
        errorMessage: "Please enter a valid message",
        options: ["[^(?:\n\n|\r\n\r\n)]*"],
      },
      errorMessage: "Please enter a valid message ",
    },
  },
  sendEmail: function (req, res) {
    const { name, phone, email, subject, message } = req.body;
    var errors = validationResult(req);

    var errorArray = [];

    if (!errors.isEmpty()) {
      errors.array().forEach(function (error) {
        var errorObject = {};
        errorObject.field = error.param;
        errorObject.message = error.msg;
        errorArray.push(errorObject);
      });
      res.status(422).json({
        errors: errorArray,
      });
    } else {
      const smtp = nodemailer.createTransport({
        host: credentials.host,
        port: credentials.port,
        secure: false,
        auth: {
          user: credentials.user,
          pass: credentials.pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      smtp.sendMail(
        {
          to: credentials.user,
          from: email,
          subject: subject,
          html: message,
        },
        (err, data) => {
          if (err) {
            var errorArray = [];
            let errorObj = {
              field: "form",
              message: `Email can't be sent due to ${err}`,
            };
            errorArray.push(errorObj);
            res.status(422).json({
              errors: errorArray,
            });
          } else {
            res.status(200).json({
              errors: [],
              success: "Email sent successfully. We will contact you soon",
            });
          }
        }
      );
    }
  },
};
