const express = require("express"),
  router = express.Router(),
  passport = require("passport");

// Load validation
const validateDeliveryOrderInput = require("../../validation/deliveryOrder");
const validateContainerInput = require("../../validation/containerDetails");

// Load Customer model
const DeliveryOrder = require("../../models/DeliveryOrder");

// Route GET api/customer/test
// Desc     Test profile route
// Access   Public
router.get("/test", (req, res) => {
  res.json({ msg: "Delivery Order works" });
});

// Route GET api/file/all
// Desc     Get all files
// Access   Private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    DeliveryOrder.find()
      .sort({ date: 1 })
      .then(deliveryOrder => {
        if (!deliveryOrder) {
          errors.nodeliveryOrder = "There are no files";
          return res.status(404).json(errors);
        }
        res.json(deliveryOrder);
      })
      .catch(err =>
        res.status(404).json({ deliveryOrder: "There are no files" })
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
    DeliveryOrder.findById(req.params.id)
      .then(deliveryOrder => {
        if (!deliveryOrder) {
          errors.nodeliveryOrder = "There file is empty";
          res.status(404).json(errors);
        }
        res.json(deliveryOrder);
      })
      .catch(err =>
        res.status(404).json({ deliveryOrder: "There is no such file" })
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
    DeliveryOrder.findByIdAndUpdate(req.params.id, req.body)
      .then(deliveryOrder => {
        res.json(deliveryOrder);
      })
      .catch(
        err =>
          res
            .status(404)
            .json({ deliveryOrder: "Update unsuccessful. Please try again" })
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
    const { errors, isValid } = validateDeliveryOrderInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // Get fields
    const deliveryOrderFields = {};

    // deliveryOrderFields.user = req.user.id;
    if (req.body.mode) deliveryOrderFields.mode = req.body.mode;
    if (req.body.fileCode) deliveryOrderFields.fileCode = req.body.fileCode;
    if (req.body.fileNo) deliveryOrderFields.fileNo = req.body.fileNo;
    if (req.body.status) deliveryOrderFields.status = req.body.status;
    if (req.body.customer) deliveryOrderFields.customer = req.body.customer;
    if (req.body.eta) deliveryOrderFields.eta = req.body.eta;
    if (req.body.entryDate) deliveryOrderFields.entryDate = req.body.entryDate;
    if (req.body.carrier) deliveryOrderFields.carrier = req.body.carrier;
    if (req.body.master) deliveryOrderFields.master = req.body.master;
    if (req.body.house) deliveryOrderFields.house = req.body.house;
    if (req.body.terminal) deliveryOrderFields.terminal = req.body.terminal;
    if (req.body.tentativelfd)
      deliveryOrderFields.tentativelfd = req.body.tentativelfd;
    if (req.body.devan) deliveryOrderFields.devan = req.body.devan;

    DeliveryOrder.findOne({ deliveryOrder: req.body.deliveryOrder })
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
        new DeliveryOrder(deliveryOrderFields).save().then(deliveryOrder => {
          res.json(deliveryOrder);
        })
      )
      .catch(err =>
        res.status(404).json({ deliveryOrder: "Please try again" })
      );
  }
);

// @route   POST api/customers/add-contact/:id
// @desc    Add contact to customer
// @access  Private
router.post(
  "/add-container/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateContainerInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    DeliveryOrder.findById(req.params.id)
      .then(deliveryOrder => {
        const newContainer = {
          number: req.body.number,
          size: req.body.size,
          freight: req.body.freight,
          customs: req.body.customs,
          pcsAmount: req.body.pcsAmount,
          pcsUnit: req.body.pcsUnit,
          weightAmount: req.body.weightAmount,
          weightUnit: req.body.weightUnit,
          dimensionAmount: req.body.dimensionAmount,
          dimensionUnit: req.body.dimensionUnit,
          dischargeDate: req.body.dischargeDate,
          lfd: req.body.lfd,
          puDate: req.body.puDate,
          demurrageDays: req.body.demurrageDays,
          puTime: req.body.puTime,
          perDiemDate: req.body.perDiemDate,
          emptyReturn: req.body.emptyReturn,
          perDiemDays: req.body.perDiemDays,
          chasisNo: req.body.chasisNo,
          chasisPerDiemDate: req.body.chasisPerDiemDate,
          chasisReturnDate: req.body.chasisReturnDate,
          chasisPerDiemDays: req.body.chasisPerDiemDays,
          chasisFlip: req.body.chasisFlip,
          newChasisNo: req.body.newChasisNo,
          TMF: req.body.TMF,
          TMFFee: req.body.TMFFee,
          nightGate: req.body.nightGate,
          prePull: req.body.prePull,
          yardStorage: req.body.yardStorage,
          storageDays: req.body.storageDays,
          advanceExamFee: req.body.advanceExamFee,
          examFee: req.body.examFee,
          advanceDemurrage: req.body.advanceDemurrage,
          demurrageFee: req.body.demurrageFee,
          advancePerDiem: req.body.advancePerDiem,
          perDiemFee: req.body.perDiemFee,
          advanceDocsFee: req.body.advanceDocsFee,
          docsFee: req.body.docsFee,
          remark: req.body.remark
        };

        // Add to contact array
        deliveryOrder.containers.push(newContainer);

        deliveryOrder.save().then(deliveryOrder => res.json(deliveryOrder));
      })
      .catch(err =>
        res.status(404).json({ deliveryOrder: "Please try again" })
      );
  }
);

// @route   POST api/customers/:customer_id/contact/:contact_id
// @desc    Delete contact in customer
// @access  Private
router.delete(
  "/:deliveryOrder_id/:container_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    DeliveryOrder.findById(req.params.deliveryOrder_id)
      .then(deliveryOrder => {
        // Get remove index
        const removeIndex = deliveryOrder.containers
          .map(item => item.id)
          .indexOf(req.params.container_id);

        // Splice out of array
        deliveryOrder.containers.splice(removeIndex, 1);

        // Save
        deliveryOrder.save().then(deliveryOrder => res.json(deliveryOrder));
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
  "/:deliveryOrder_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    DeliveryOrder.findByIdAndRemove(req.params.deliveryOrder_id).then(() => {
      res.json({ success: true });
    });
  }
);

module.exports = router;
