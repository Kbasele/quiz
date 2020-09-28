fetch("https://quizapi.io/api/v1/questions -G \
-d apiKey=SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'name' cannot be null (SQL: insert into `users` (`name`, `email`, `password`, `email_verified_at`, `auth_type`, `updated_at`, `created_at`) values (?, kevinbasele@hotmail.se, $2y$10$yWJLu/mIy88Ji/iJPpvJyu/nJFcfeVAgUbxQpEqcyWc7cpIIV71gi, 2020-09-28 13:55:25, github, 2020-09-28 13:55:25, 2020-09-28 13:55:25))  \
-d limit=10")
  .then(response => response.json())
  .then(data => {
  });