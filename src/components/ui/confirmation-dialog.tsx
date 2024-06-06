import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function ConfirmationDialog({
  triggerChildren,
  title,
  description,
  cancelText = "Cancel",
  continueText = "Continue",
  onCancel,
  onContinue,
  open,
}: Readonly<{
  triggerChildren?: React.ReactNode;
  title: string;
  description: string;
  cancelText?: string;
  continueText?: string;
  onCancel?: () => void;
  onContinue?: () => void;
  open?: boolean;
}>) {
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>{triggerChildren}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onContinue}>
            {continueText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
