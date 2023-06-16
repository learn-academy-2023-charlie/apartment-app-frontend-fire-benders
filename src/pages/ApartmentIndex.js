import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const ApartmentIndex = ({ apartments }) => {
  console.log(apartments);
  return (
    <main className="card-columns ms-4">
      {apartments?.map((apartment, index) => {
        return (
          <div>
            <br />
            <br />
            <Card style={{ width: "14rem" }} key={index} className="eachCard">
              <img
                alt="profile of the apartment"
                src={apartment.image}
              />

              <CardBody>
                <CardTitle tag="h5">{apartment.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Level: {apartment.level}
                </CardSubtitle>
                <Button>
                  <NavLink
                    to={`/apartmentshow/${apartment.id}`}
                    className="nav-link"
                  >
                    check me out
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </main>
  );
};

export default ApartmentIndex;