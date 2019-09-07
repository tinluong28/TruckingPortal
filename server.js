const profile = require("./routes/api/profile"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  path = require("path"),
  users = require("./routes/api/users"),
  customer = require("./routes/api/customer"),
  delivery = require("./routes/api/delivery"),
  deliveryOrder = require("./routes/api/deliveryOrder"),
  express = require("express"),
  mongoose = require("mongoose"),
  app = express(),
  port = process.env.PORT || 5000;

//Body parser middleware
app.use(bodyParser.urlencoded({ extented: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);
// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/customers", customer);
app.use("/api/delivery", delivery);
app.use("/api/file", deliveryOrder);

// Server static assets if in production
if (process.env.NODE_ENV == "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}

// Console log server is up and running
app.listen(port, process.env.IP, () => {
  console.log(`Listening on port: ${port}`);
});
