import { Fragment } from "react";

import {
  Container,
  BarWrapper,
  Stepper,
  Step,
  Line,
} from "./styles";

function ProgressBar({ currentStep, totalSteps, goToStep }) {
  return (
    <Container>
      <BarWrapper>
        <Stepper>
          {Array.from({ length: totalSteps }).map((_, index) => {
            const step = index + 1;

            const isActive = step === currentStep;
            const isCompleted = step < currentStep;

            return (
              <Fragment key={step}>
                <Step
                  $active={isActive}
                  $completed={isCompleted}
                  onClick={() => goToStep(step)}
                >
                  {step}
                </Step>

                {step !== totalSteps && (
                  <Line $completed={step < currentStep} />
                )}
              </Fragment>
            );
          })}
        </Stepper>
      </BarWrapper>
    </Container>
  );
}

export default ProgressBar;