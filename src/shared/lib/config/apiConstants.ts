const V         = "/v1"
const ME        = "/me"
const EDU       = "/education"
const MATERIALS = "/materials"
const THEORIES  = "/theories"

export const REGISTER_URL      = V + "/register"
export const LOGIN_URL         = V + "/token"
export const GETME_URL         = V + ME + "/person"
export const GET_TAGS_URL      = V + "/tags"
export const GET_MATERIALS_URL = V + EDU + MATERIALS + "/get"
export const GET_THEORIES_URL  = V + EDU + THEORIES
export const GET_THEORY_URL    = V + EDU + "/theory"
