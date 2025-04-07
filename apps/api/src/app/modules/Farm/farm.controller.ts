import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { FarmService } from "./farm.service";

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
  const result = await FarmService.getAllFarms();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Farms retrieved successfully!",
    data: result,
  });
});

export const FarmController = {
  createFarm,
  getAllFarms,
};
