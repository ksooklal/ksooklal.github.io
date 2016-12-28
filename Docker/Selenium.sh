#!/bin/bash

javac -cp "lib/*" SeleniumTestTellCharleysSurveyUtility.java TestRunner.java

java -cp ".:lib/*" TestRunner