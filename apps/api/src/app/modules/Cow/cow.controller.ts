import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CowService } from "./cow.service";
import httpStatus from "http-status";

const createCow = catchAsync(async(req,res)=> {

    const result = await CowService.createCow(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Cow created successfully!",
        data: result
    });
})

const getAllCows = catchAsync(async(req,res)=> {
    const result = await CowService.getAllCows()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Cows retrieved successfully!",
        data: result
    });
})

export const CowController = {
    createCow,
    getAllCows
}