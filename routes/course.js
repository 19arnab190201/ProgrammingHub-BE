const express = require("express");
const router = express.Router();

const {
  createCourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse,

  createChapter,
  getChapter,
  updateChapter,
  deleteChapter,

  createSubTopic,
  getSubTopic,
  updateSubTopic,
  deleteSubTopic,

  createQuiz,
  getQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/courseControllers");

router.route("/create-course").post(createCourse);
router.route("/courses").get(getAllCourses);
router
  .route("/course/:courseId")
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);

router.route("/course/:courseId/create-chapter").post(createChapter);
router
  .route("/chapter/:chapterId")
  .get(getChapter)
  .put(updateChapter)
  .delete(deleteChapter);

router.route("/chapter/:chapterId/create-subtopic").post(createSubTopic);
router
  .route("/subtopic/:subTopicId")
  .get(getSubTopic)
  .put(updateSubTopic)
  .delete(deleteSubTopic);

router.route("/chapter/:chapterId/create-quiz").post(createQuiz);
router.route("/quiz/:quizId").get(getQuiz).put(updateQuiz).delete(deleteQuiz);

module.exports = router;
