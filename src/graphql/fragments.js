import { gql } from "@apollo/client";

export const REPO_PARTS = gql`
fragment RepoParts on Repository {
id,
fullName,
description,
language,
stargazersCount,
forksCount,
reviewCount,
ratingAverage,
ownerAvatarUrl,
url
}
`