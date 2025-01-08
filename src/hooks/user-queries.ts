"use client";
import {
  getAllAutomations,
  getAutomationInfo,
  getProfilePosts,
} from "@/actions/automations";
import { useQuery } from "@tanstack/react-query";
import { onUserInfo } from "@/actions/user";

export const useQueryAutomations = () => {
  return useQuery({
    queryKey: ["user-automations"],
    queryFn: getAllAutomations,
  });
};

export const useQueryAutomation = (id: string) => {
  return useQuery({
    queryKey: ["automation-info"],
    queryFn: () => getAutomationInfo(id),
  });
};

export const useQueryUser = () => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: onUserInfo,
  });
};

export const useQueryAutomationPosts = () => {
  const fetchPosts = async () => await getProfilePosts();
  return useQuery({
    queryKey: ["instagram-media"],
    queryFn: fetchPosts,
  });
};
