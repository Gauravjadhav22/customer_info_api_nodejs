const { StatusCodes } = require("http-status-codes");
const CustomErrors = require("../errors");
const Member = require("../model/member");

const createMember = async (req, res) => {
  const { contact } = req.body;
  //   let re = new RegExp() {$regex: req.body.name, $options: "x"}
  let re = req.body.name.split(" ").join("");
  req.body.nameId = re.toLowerCase();
  console.log(re);

  console.log(contact);
  if (!contact) {
    throw new CustomErrors.BadRequestError(`please provide mobile no. !...`);
  }
  const contactNo = await Member.find({ contact: contact });
  if (contactNo === contact) {
    throw new CustomErrors.BadRequestError(`please provide mobile no. !...`);
  }
  const member = await Member.create(req.body);
  res.status(StatusCodes.CREATED).json({ member });
};

const getMember = async (req, res) => {
  const {
    params: { member: member },
  } = req;
  let sd = member.toLowerCase();
  console.log(sd);

  const memberRes = await Member.find({
    nameId: { $regex: sd, $options: "x" },
  });
  console.log(memberRes);
  res.status(StatusCodes.OK).json({ memberRes });
};

const updateMember = async (req, res) => {
  const {
    params: { member: member },
  } = req;
  let re = member.split(" ").join("");
  let sd = re.toLowerCase();
  req.body.nameId = sd;

  const memberP = await Member.findOne({
    nameId: sd,
  });
  if (!memberP) {
    throw new CustomErrors.notFoundError(`${member} was not found ...`);
  }
  const memberRes = await Member.findByIdAndUpdate(
    {
      _id: memberP._id,
    },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ memberRes });
};

const deleteMember = async (req, res) => {
  const {
    params: { member: member },
  } = req;
  let re = member.split(" ").join("");
  let sd = re.toLowerCase();


  
  const memberP = await Member.findOne({
    nameId: sd,
  });
  if (!memberP) {
    throw new CustomErrors.notFoundError(`${member} was not found ...`);
  }

  const memberRes = await Member.findByIdAndRemove({ _id: memberP._id });
  res.status(StatusCodes.OK).json({ ...memberRes,msg:"member has successfully deleted" });
};

module.exports = {
  getMember,
  createMember,
  updateMember,
  deleteMember,
};
