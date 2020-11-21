CREATE TABLE `TireWheel`.`Branch` (
  `branch_id` INT NOT NULL,
  `location` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`branch_id`),
  UNIQUE INDEX `branch_id_UNIQUE` (`branch_id` ASC) VISIBLE);


CREATE TABLE `TireWheel`.`Company` (
  `company_NO` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(15) NULL,
  PRIMARY KEY (`company_NO`),
  UNIQUE INDEX `company_NO_UNIQUE` (`company_NO` ASC) VISIBLE);



CREATE TABLE `TireWheel`.`Tire` (
  `branch_id` INT NOT NULL,
  `product_id` CHAR(5) NOT NULL,
  `brand` VARCHAR(15) NOT NULL,
  `series` VARCHAR(20) NULL,
  `tiresize` CHAR(10) NOT NULL,
  `company_no` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`branch_id`, `product_id`),
  INDEX `company_id_for_tire_idx` (`company_no` ASC) VISIBLE,
  CONSTRAINT `branch_id_for_tire`
    FOREIGN KEY (`branch_id`)
    REFERENCES `TireWheel`.`Branch` (`branch_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `company_id_for_tire`
    FOREIGN KEY (`company_no`)
    REFERENCES `TireWheel`.`Company` (`company_NO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);





CREATE TABLE `TireWheel`.`Magwheel` (
  `branch_id` INT NOT NULL,
  `product_id` CHAR(5) NOT NULL,
  `series` VARCHAR(20) NOT NULL,
  `model` VARCHAR(20) NOT NULL,
  `size` VARCHAR(15) NULL,
  `pcd` VARCHAR(15) NULL,
  `et` INT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`branch_id`, `product_id`),
  CONSTRAINT `branch_id_for_magwheel`
    FOREIGN KEY (`branch_id`)
    REFERENCES `TireWheel`.`Branch` (`branch_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `TireWheel`.`History` (
  `date` CHAR(10) NOT NULL,
  `product_id` CHAR(5) NOT NULL,
  `quantity` INT NOT NULL,
  `branch_id` INT NOT NULL,
  PRIMARY KEY (`date`, `product_id`, `branch_id`),
  INDEX `branch_id_for_history_idx` (`branch_id` ASC) VISIBLE,
  CONSTRAINT `branch_id_for_history`
    FOREIGN KEY (`branch_id`)
    REFERENCES `TireWheel`.`Branch` (`branch_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
