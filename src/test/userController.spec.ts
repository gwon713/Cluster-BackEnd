import { expect } from "chai"
import { Request } from "supertest";
import { it } from "mocha"

describe('user Controller 테스트', () => {
    it('user Route 테스트', () => {
        // GET /user
    });
    it('user 로그인 테스트', () => {
        // POST /v1/user/login
    });
    it('user 로그아웃 테스트', () => {
        // POST /v1/user/logout
    });
    it('user 닉네임 가져오기 테스트', () => {
        // GET /v1/user/nickname
    });
    it('user 회원가입 테스트', () => {
        // POST /v1/user/signup
    });
    it('user 프로필 가져오기 테스트', () => {
        // GET /v1/user/profile
    });
    it('user 프로필 수정 테스트', () => {
        // PUT /v1/user/profile/edit
    });
})