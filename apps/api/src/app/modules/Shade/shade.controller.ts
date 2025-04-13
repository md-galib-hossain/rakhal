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
  const result = await ShadeService.getAllShades(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shades retrieved successfully!",
    data: result.data,
    meta: result.meta,
  });
});

const getSingleShade = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ShadeService.getSingleShade(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shade retrieved successfully!",
    data: result,
  });
});

const updateShade = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ShadeService.updateShade(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shade updated successfully!",
    data: result,
  });
});

const toggleIsActiveShade = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body;
  const result = await ShadeService.toggleIsActiveShade(id, isActive);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shade active status changed successfully!",
    data: result,
  });
});

export const ShadeController = {
  createShade,
  getAllShades,
  getSingleShade,
  updateShade,
  toggleIsActiveShade,
};