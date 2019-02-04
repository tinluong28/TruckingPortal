const express = require("express"),
  router = express.Router(),
  passport = require("passport");

// Load validation

const validateDeliveryInput = require("../../validation/delivery");
const validateContactInput = require("../../validation/contact");

// Load Delivery model
const Delivery = require("../../models/Delivery");

// Route GET api/delivery/test
// Desc     Test profile route
// Access   Public
router.get("/test", (req, res) => {
  res.json({ msg: "Delivery works" });
});

// Route GET api/delivery/all
// Desc     Get all delivery
// Access   Private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Delivery.find()
      .sort({ company: 1 })
      .then(delivery => {
        if (!delivery) {
          errors.nodelivery = "There are no delivery locations";
          return res.status(404).json(errors);
        }
        res.json(delivery);
      })
      .catch(err =>
        res.status(404).json({ delivery: "There are no delivery location" })
      );
  }
);

// Route GET api/delivery/:delivery_id
// Desc     Get or Edit delivery by delivery ID
// Access   Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Delivery.findById(req.params.id)
      .then(delivery => {
        if (!delivery) {
          errors.nodelivery = "There is no such delivery location";
          res.status(404).json(errors);
        }
        res.json(delivery);
      })
      .catch(err =>
        res
          .status(404)
          .json({ delivery: "There is no data for this delivery location" })
      );
  }
);

// Route POST api/delivery
// Desc     Create delivery
// Access   Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDeliveryInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // Get fields
    const deliveryFields = {};

    if (req.body.company) deliveryFields.company = req.body.company;
    if (req.body.address) deliveryFields.address = req.body.address;
    if (req.body.city) deliveryFields.city = req.body.city;
    if (req.body.state) deliveryFields.state = req.body.state;
    if (req.body.zipcode) deliveryFields.zipcode = req.body.zipcode;
    if (req.body.phone) deliveryFields.phone = req.body.phone;
    if (req.body.remark) deliveryFields.remark = req.body.remark;

    Delivery.findOne({ delivery: req.body.delivery })
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
        new Delivery(deliveryFields).save().then(delivery => {
          res.json(delivery);
        })
      )
      .catch(err => res.status(404).json({ delivery: "Please try again" }));
  }
);

// @route   PUT api/delivery/delivery_id
// @desc    Update delivery
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Delivery.findByIdAndUpdate(req.params.id, req.body)
      .then(updatedDelivery => {
        res.json(updatedDelivery);
      })
      .catch(err =>
        res
          .status(404)
          .json({ delivery: "Update unsuccessful. Please try again" })
      );
  }
);

// @route   POST api/delivery/add-contact/delivery_id
// @desc    Add contact to delivery
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
    Delivery.findById(req.params.id)
      .then(delivery => {
        const newContact = {
          name: req.body.name,
          position: req.body.position,
          office: req.body.office,
          cell: req.body.cell,
          email: req.body.email,
          about: req.body.about
        };

        // Add to exp array
        delivery.contact.push(newContact);

        delivery.save().then(delivery => res.json(delivery));
      })
      .catch(err => res.status(404).json({ delivery: "Please try again" }));
  }
);

// @route   POST api/delivery/:delivery_id/contact/:contact_id
// @desc    Delete contact in delivery
// @access  Private
router.delete(
  "/:id/:contact_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Delivery.findById(req.params.id)
      .then(delivery => {
        // Get remove index
        const removeIndex = delivery.contact
          .map(item => item.id)
          .indexOf(req.params.contact_id);

        // Splice out of array
        delivery.contact.splice(removeIndex, 1);

        // Save
        delivery.save().then(delivery => res.json(delivery));
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

// @route   DELETE api/delivery
// @desc    Delete delivery
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Delivery.findByIdAndRemove(req.params.id).then(() => {
      res.json({ success: true });
    });
  }
);

module.exports = router;
