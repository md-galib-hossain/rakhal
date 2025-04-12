import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { FarmService } from "./farm.service";
import httpStatus from "http-status";

const createFarm = catchAsync(async (req, res) => {
  const result = await FarmService.createFarm(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Farm created successfully!",
    data: result,
  });
});

const getAllFarms = catchAsync(async (req, res) => {
  const result = await FarmService.getAllFarms(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Farms retrieved successfully!",
    data: result.data,
    meta: result.meta,
  });
});

const getSingleFarm = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FarmService.getSingleFarm(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Farm retrieved successfully!",
    data: result,
  });
});

const updateFarm = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FarmService.updateFarm(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Farm updated successfully!",
    data: result,
  });
});

const toggleIsActiveFarm = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body; 
  const result = await FarmService.toggleIsActiveFarm(id, isActive);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Farm active status changed successfully!",
    data: result,
  });
});

export const FarmController = {
  createFarm,
  getAllFarms,
  getSingleFarm,
  updateFarm,
  toggleIsActiveFarm,
};