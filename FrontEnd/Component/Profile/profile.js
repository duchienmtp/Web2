var profileSettingItems = $(".profile-setting-item");
const bodyContainer = $(".body-container");

Array.from(profileSettingItems).forEach((profileSettingItem) => {
  profileSettingItem.addEventListener("click", () => {
    document.querySelector(".selected")?.classList.remove("selected");
    profileSettingItem.classList.add("selected");
  });
});

$(document).ready(function (event) {
  bodyContainer.ready(function () {
    $.ajax({
      url: "./UpdateProfileInfo/updateProfile.php",
      success: function (response) {
        $(".profile-content-container").html(response);
      },
      data: {
        isUserInfo: true
      },
    });
  });

  const updateProfile = $(".updateProfile");
  Array.from(updateProfile).forEach((updateProfileItem) => {
    updateProfileItem.addEventListener("click", () => {
      $.ajax({
        url: "./UpdateProfileInfo/updateProfile.php",
        success: function (response) {
          $(".profile-content-container").html(response);
        },
        data: {
          isUserInfo: updateProfileItem.classList.contains("isUserInfo")
            ? true
            : false,
        },
      });
    });
  });

  $(".orderManagement").click(function () {
    $.ajax({
      url: "./UpdateProfileInfo/orderManagement.php",
      success: function (response) {
        $(".profile-content-container").html(response);
      },
    });
  });
});
