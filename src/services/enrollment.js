/*************************************************************************************
 * Product: ADempiere gRPC Enrollment Client                                         *
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

class Enrollment {

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor(config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.enrollmentHost = adempiereConfig.accessHost;
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initEnrollmentService();
    console.log('ADempiere Enrollment Client Started');
  }

  // Init connection
  initEnrollmentService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('../grpc/proto/enrollment_grpc_pb');
    this.enrollment = new services.RegisterClient(
      this.enrollmentHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Enrollment Service
  getEnrollmentService() {
    return this.enrollment;
  }

  //  Enroll User
  enrollUser({
    userName,
    name,
    email,
    clientVersion,
    applicationType,
    password
  }, callback) {
    const { EnrollUserRequest } = require('../grpc/proto/enrollment_pb.js')
    const request = new EnrollUserRequest()
    request.setUserName(userName)
    request.setName(name)
    request.setEmail(email)
    request.setClientVersion(clientVersion)
    request.setApplicationType(applicationType)
    request.setPassword(password)
    this.getEnrollmentService().enrollUser(request, callback)
  }

  //  Reset Password
  resetPassword({
    userName,
    email,
    clientVersion
  }, callback) {
    const { ResetPasswordRequest } = require('../grpc/proto/enrollment_pb.js')
    const request = new ResetPasswordRequest()
    request.setUserName(userName)
    request.setEmail(email)
    request.setClientVersion(clientVersion)
    this.getEnrollmentService().resetPassword(request, callback)
  }

  //  Reset Password from Token
  resetPasswordFromToken({
    token,
    password,
    clientVersion
  }, callback) {
    const { ResetPasswordTokenRequest } = require('../grpc/proto/enrollment_pb.js')
    const request = new ResetPasswordTokenRequest()
    request.setToken(token)
    request.setPassword(password)
    request.setClientVersion(clientVersion)
    this.getEnrollmentService().resetPasswordFromToken(request, callback)
  }

  //  Activate User
  activateUser({
    token,
    clientVersion
  }, callback) {
    const { ActivateUserRequest } = require('../grpc/proto/enrollment_pb.js')
    const request = new ActivateUserRequest()
    request.setToken(token)
    request.setClientVersion(clientVersion)
    this.getEnrollmentService().activateUser(request, callback)
  }

}

module.exports = Enrollment;
