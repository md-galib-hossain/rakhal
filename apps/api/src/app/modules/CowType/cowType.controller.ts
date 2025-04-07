import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CowTypeService } from "./cowType.service";
import httpStatus from "http-status";

const createCowType = catchAsync(async (req, res) => {
  const result = await CowTypeService.createCowType(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "CowType created successfully!",
    data: result,
  });
});

const getAllCowTypes = catchAsync(async (req, res) => {
  const result = await CowTypeService.getAllCowTypes();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "CowTypes retrieved successfully!",
    data: result,
  });
});

export const CowTypeController = {
  createCowType,
  getAllCowTypes,
};
