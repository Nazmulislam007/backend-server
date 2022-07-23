const Poll = require("../schema/poll");

exports.createPollGetController = (req, res, next) => {
  res.render("create");
};

exports.createPollPostController = async (req, res, next) => {
  let { title, description, options } = req.body;

  options = options.map((opt) => ({
    name: opt,
    vote: 0,
  }));

  let poll = new Poll({
    title,
    description,
    options,
  });

  try {
    await poll.save();
    res.redirect("/polls");
  } catch (error) {
    console.log(error);
  }
};

exports.getAllPolls = async (req, res, next) => {
  try {
    const polls = await Poll.find();
    res.render("poll", { polls });
  } catch (error) {
    console.log(error);
  }
};

exports.getViewPoll = async (req, res, next) => {
  const id = req.params._id;
  try {
    const poll = await Poll.findById(id);
    const options = [...poll.options];

    const result = [];

    options.forEach((option) => {
      const persentage = (option.vote * 100) / poll.totalVotes;
      result.push({
        ...option._doc,
        persentage: persentage ? persentage : 0,
      });
    });

    res.render("viewPoll", { poll, result });
  } catch (error) {
    console.log(error);
  }
};

exports.postViewPoll = async (req, res, next) => {
  const id = req.params._id;
  const optionId = req.body.option;

  try {
    let poll = await Poll.findById(id);
    let options = [...poll.options];

    let index = options.findIndex((o) => o.id === optionId);
    options[index].vote += 1;

    let totalVotes = poll.totalVotes + 1;

    await Poll.findByIdAndUpdate({ _id: poll._id }, { options, totalVotes });

    res.redirect("/polls/" + id);
  } catch (error) {
    console.log(error);
  }
};
