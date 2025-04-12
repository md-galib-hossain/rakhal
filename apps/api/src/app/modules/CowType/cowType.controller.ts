import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CowTypeService } from "./cowType.service";
import httpStatus from "http-status";

const createCowType = catchAsync(async (req, res) => {
  const result = await CowTypeService.createCowType(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cow type created successfully!",
    data: result,
  });
});

const getAllCowTypes = catchAsync(async (req, res) => {
  const result = await CowTypeService.getAllCowTypes(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cow types retrieved successfully!",
    data: result.data,
    meta: result.meta,
  });
});

const getSingleCowType = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CowTypeService.getSingleCowType(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cow type retrieved successfully!",
    data: result,
  });
});

const updateCowType = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CowTypeService.updateCowType(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cow type updated successfully!",
    data: result,
  });
});

const toggleIsActiveCowType = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body; // Expect isActive in body
  const result = await CowTypeService.toggleIsActiveCowType(id, isActive);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cow type active status changed successfully!",
    data: result,
  });
});

export const CowTypeController = {
  createCowType,
  getAllCowTypes,
  getSingleCowType,
  updateCowType,
  toggleIsActiveCowType,
};