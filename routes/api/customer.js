const express = require("express"),
  router = express.Router(),
  passport = require("passport");

// Load validation
const validateCustomerInput = require("../../validation/customer");
const validateContactInput = require("../../validation/contact");

// Load Customer model
const Customer = require("../../models/Customer");

// Route GET api/customer/test
// Desc     Test profile route
// Access   Public
router.get("/test", (req, res) => {
  res.json({ msg: "Customer works" });
});

// Route GET api/customers/all
// Desc     Get all customer
// Access   Private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Customer.find()
      .sort({ company: 1 })
      .then(customer => {
        if (!customer) {
          errors.nocustomer = "There are no profiles";
          return res.status(404).json(errors);
        }
        res.json(customer);
      })
      .catch(err =>
        res.status(404).json({ customer: "There are no customers" })
      );
  }
);
// Route GET api/profie/handle/:handle
// Desc     Get profile by handle
// Access   Public
// router.get("/handle/:handle", (req, res) => {
//   const errors = {};

//   Profile.findOne({ handle: req.params.handle })
//     .populate("user", ["name", "avatar"])
//     .then(profile => {
//       if (!profile) {
//         errors.noprofile = "There is no profile for this user";
//         res.status(404).json(errors);
//       }
//       res.json(profile);
//     })
//     .catch(err =>
//       res.status(404).json({ profile: "There is no profile for this user" })
//     );
// });

// Route GET api/customers/:customer_id
// Desc     Get/edit customer by customer ID
// Access   Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Customer.findById(req.params.id)
      .then(customer => {
        if (!customer) {
          errors.nocustomer = "There is no such customer";
          res.status(404).json(errors);
        }
        res.json(customer);
      })
      .catch(err =>
        res
          .status(404)
          .json({ customer: "There is no profile for this customer" })
      );
  }
);

// Route PUT api/customers/:id
// Desc     Update customer
// Access   Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Customer.findByIdAndUpdate(req.params.id, req.body)
      .then(customer => {
        res.json(customer);
      })
      .catch(
        err =>
          res
            .status(404)
            .json({ customer: "Update unsuccessful. Please try again" })
        // res.redirect("/customers/" + req.params.id)
      );
  }
);

// Route POST api/customers
// Desc     Create customer
// Access   Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCustomerInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // Get fields
    const customerFields = { account: {} };

    // customerFields.user = req.user.id;
    if (req.body.company) customerFields.company = req.body.company;
    if (req.body.address) customerFields.address = req.body.address;
    if (req.body.city) customerFields.city = req.body.city;
    if (req.body.state) customerFields.state = req.body.state;
    if (req.body.zipcode) customerFields.zipcode = req.body.zipcode;
    if (req.body.businesstype)
      customerFields.businesstype = req.body.businesstype;
    if (req.body.doingbusinesssince)
      customerFields.doingbusinesssince = req.body.doingbusinesssince;
    if (req.body.remark) customerFields.remark = req.body.remark;
    if (req.body.taxidtype) customerFields.taxidtype = req.body.taxidtype;
    if (req.body.taxid) customerFields.taxid = req.body.taxid;
    if (req.body.accountno) customerFields.accountno = req.body.accountno;
    if (req.body.credittype) customerFields.credittype = req.body.credittype;
    if (req.body.creditlimit) customerFields.creditlimit = req.body.creditlimit;
    if (req.body.paymentterm) customerFields.paymentterm = req.body.paymentterm;
    if (req.body.credithold) customerFields.credithold = req.body.credithold;
    if (req.body.note) customerFields.note = req.body.note;

    Customer.findOne({ customer: req.body.customer })
      .then(
        //Create

        // Check if handle exists
        // Profile.findOne({ handle: profileFields.handle }).then(profile => {
        //   if (profile) {
        //     errors.handle = "That handle already exists";
        //     res.status(400).json(errors);
        //   }
        // });

        // Save Profile
        new Customer(customerFields).save().then(customer => {
          res.json(customer);
        })
      )
      .catch(err => res.status(404).json({ customer: "Please try again" }));
  }
);

// @route   POST api/customers/add-contact/:id
// @desc    Add contact to customer
// @access  Private
router.post(
  "/add-contact/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateContactInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Customer.findById(req.params.id)
      .then(customer => {
        const newContact = {
          name: req.body.name,
          position: req.body.position,
          office: req.body.office,
          cell: req.body.cell,
          email: req.body.email,
          about: req.body.about
        };

        // Add to contact array
        customer.contact.push(newContact);

        customer.save().then(customer => res.json(customer));
      })
      .catch(err => res.status(404).json({ customer: "Please try again" }));
  }
);

// @route   POST api/customers/:customer_id/contact/:contact_id
// @desc    Delete contact in customer
// @access  Private
router.delete(
  "/:customer_id/:contact_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Customer.findById(req.params.customer_id)
      .then(customer => {
        // Get remove index
        const removeIndex = customer.contact
          .map(item => item.id)
          .indexOf(req.params.contact_id);

        // Splice out of array
        customer.contact.splice(removeIndex, 1);

        // Save
        customer.save().then(customer => res.json(customer));
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

// @route   POST api/customers/delivery/:delivery_id
// @desc    Delete delivery in customer
// @access  Private
// router.delete(
//   "/:customer_id/delivery/:delivery_id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Customer.findOne({ customer: req.customer.id })
//       .then(customer => {
//         // Get remove index
//         const removeIndex = customer.delivery
//           .map(item => item.id)
//           .indexOf(req.params.delivery_id);

//         // Splice out of array
//         customer.delivery.splice(removeIndex, 1);

//         // Save
//         customer.save().then(customer => res.json(customer));
//       })
//       .catch(err => {
//         res.status(404).json(err);
//       });
//   }
// );

// @route   DELETE api/customers
// @desc    Delete customer
// @access  Private
router.delete(
  "/:customer_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Customer.findByIdAndRemove(req.params.customer_id).then(() => {
      res.json({ success: true });
    });
  }
);

module.exports = router;
