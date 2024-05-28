"use client";

import { Box, TextField } from "@mui/material";
import { CATEGORY_CREATE_MUTATION } from "@queries/categories";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function CategoryCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    formState: { errors },
  } = useForm({
    refineCoreProps: {
      meta: {
        gqlMutation: CATEGORY_CREATE_MUTATION,
      },
    },
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("title", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.title}
          helperText={(errors as any)?.title?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Title"}
          name="title"
        />
      </Box>
    </Create>
  );
}
