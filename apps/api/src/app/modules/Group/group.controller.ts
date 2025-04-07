import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { GroupService } from "./group.service";

const createGroup = catchAsync(async (req, res) => {
  const result = await GroupService.createGroup(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Group created successfully!",
    data: result,
  });
});

const getAllGroups = catchAsync(async (req, res) => {
  const result = await GroupService.getAllGroups();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Groups retrieved successfully!",
    data: result,
  });
});

export const GroupController = {
  createGroup,
  getAllGroups,
};
