import React from "react";
function Copyright() {
  return (
    //<Typography variant="inherit" color="inherit" align="center">
    <div>
      {" © "} {new Date().getFullYear()}
      {" All Right Reserved"}
      {"."}
    </div>
    //</Typography>
  );
}
export default function FooterCopyright() {
  return (
    <div className="footer-copyright">
      <p className="footer-company">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <p className="text-center">
                <a href="#" target="_blank">
                  {" "}
                  www.dap.com
                </a>
              </p>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <p className="text-center">
                <a href="#">
                  {" "}
                  <Copyright />{" "}
                </a>
              </p>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <p className="text-center">
                <a href={""} target="_blank">
                  Terms & Conditions |
                </a>
                <a href={""} target="_blank">
                  Privacy Policy |{" "}
                </a>
                <a href="" target="_blank">
                  FAQs
                </a>
              </p>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
}
