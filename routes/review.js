const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewsController = require("../controller/reviewsController.js");

// post reviews
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewsController.createReview)
);

// delete reviews route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewsController.destroyReview)
);

module.exports = router;