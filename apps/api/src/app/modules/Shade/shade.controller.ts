import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ShadeService } from "./shade.service";
import httpStatus from "http-status";

const createShade = catchAsync(async (req, res) => {
  const result = await ShadeService.createShade(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shade created successfully!",
    data: result,
  });
});

const getAllShades = catchAsync(async (req, res) => {
  const result = await ShadeService.getAllShades();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shades retrieved successfully!",
    data: result,
  });
});

export const ShadeController = {
  createShade,
  getAllShades,
};
