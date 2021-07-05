import React, { useCallback } from "react";
import AddPlaceForm from "../components/forms/AddPlaceForm";
import MainLayout from "../layouts/MainLayout";
import { addDocMutation } from "../api/addDocMutation";
import { cardsData } from "../data/cardsData";
import { useHistory } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function AddPlace() {
  const onSubmitHandler = (values) => {
    addDocMutation(values)
      .then(() => {
        handleBack();
        NotificationManager.success("Successfully Added A Place!");
      })
      .catch(() => {
        NotificationManager.error("Something Went Wrong");
      });
  };

  const history = useHistory();
  const handleBack = useCallback(() => history.push("/"), [history]);

  return (
    <div>
      <MainLayout pageName="Add A Nice Place">
        <div className="addContent cardsContent">
          <button
            style={{ marginTop: 200 }}
            onClick={() => {
              cardsData.forEach((element) => {
                let searchString =
                  element.name.toLowerCase() +
                  element.place.toLowerCase() +
                  element.continent.toLowerCase() +
                  element.altitude_depth.toLowerCase() +
                  element.comment.toLowerCase();
                addDocMutation({ ...element, searchString });
              });
            }}
          >
            TESTDATASUBMISSION
          </button>
          <AddPlaceForm onSubmitHandler={onSubmitHandler} />
        </div>
      </MainLayout>
    </div>
  );
}
